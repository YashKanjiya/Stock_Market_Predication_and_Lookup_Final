#from asyncio import tasks
#from pickletools import float8
#from unittest import result
import streamlit as st
import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import pandas_datareader as data
from keras.models import load_model
import datetime
from dateutil.relativedelta import relativedelta

from db_fxnx import create_table,add_data,view,total_sum,total_sum_predict
#plt.style.use("ggplot")
#im = Image.open("favicon.ico")
st.set_page_config(
        page_title="STOCK PREDICTION",
        page_icon="chart_with_upwards_trend",
        #layout="wide",
    )

rad =st.sidebar.radio("STOCK PREDICTION",["STOCK","PORTFOLIO"])
#first Part
if rad == "STOCK":
    
    st.title('Stock Prediction')

    user_input = st.text_input('Enter Stock Ticker','HDFCBANK.NS')

    #start = '2018-08-01'
    input_date=st.date_input("Start Date:")
    start=input_date-relativedelta(years=5)
    #end = '2022-2-24'
    #end=st.date_input("End Date:")
    end=input_date
    #st.write(start)
    #st.write(end)
    df=data.DataReader(user_input,'yahoo',start,end)

    #data visible
    #st.subheader('Data from 2015 to 2022')
    #st.write(df.describe())

    #visualixation
    st.subheader('Closing Price Vs Time chart')
    fig=plt.figure(figsize=(12,6))
    plt.plot(df.Close)
    st.pyplot(fig)

    #10ma and 20ma

    st.subheader('Closing Price Vs Time chart with 10MA & 20MA')
    ma10=df.Close.rolling(10).mean()
    ma20=df.Close.rolling(20).mean()
    fig=plt.figure(figsize=(16,8))
    plt.plot(ma10)
    plt.plot(ma20)
    plt.plot(df.Close,'g')
    st.pyplot(fig)

    #100ma & 200ma
    st.subheader('Closing Price Vs Time chart with 100MA & 200MA')
    ma100=df.Close.rolling(100).mean()
    ma200=df.Close.rolling(200).mean()
    fig=plt.figure(figsize=(16,8))
    plt.plot(ma100)
    plt.plot(ma200)
    plt.plot(df.Close,'g')
    st.pyplot(fig)

    #prediction

    data_training = pd.DataFrame(df['Close'][0:int(len(df)*0.70)])
    data_testing = pd.DataFrame(df['Close'][int(len(df)*0.70):int(len(df))])

    from sklearn.preprocessing import MinMaxScaler
    scaler = MinMaxScaler(feature_range=(0,1))

    data_training_array = scaler.fit_transform(data_training)

    #load the model
    model=load_model('keras_model.h5')

    past_100_days = data_training.tail(100)
    final_df=past_100_days.append(data_testing,ignore_index=True)

    input_data=scaler.fit_transform(final_df)

    x_test =[]
    y_test = []

    for i in range(100,input_data.shape[0]):
        x_test.append(input_data[i-100:i])
        y_test.append(input_data[i,0])


    x_test,y_test = np.array(x_test),np.array(y_test)
    y_predicted = model.predict(x_test)

    scaler=scaler.scale_

    scaler_factor = 1/scaler[0]
    y_predicted=y_predicted*scaler_factor
    y_test =y_test * scaler_factor

    #plot the graph
    st.subheader('Prediction vs Original')
    fig2=plt.figure(figsize=(16,8))
    plt.plot(y_test,'blue', label ='Original Price')
    plt.plot(y_predicted,'red', label ='Predicted Price')
    plt.xlabel('Time')
    plt.ylabel('Price')
    plt.legend()
    st.pyplot(fig2)

    #this is only SEE values
    #st.write(y_predicted)
    mynum=len(y_predicted)
    myvalue=y_predicted[mynum-1]
    #st.write(mynum)
    #st.write(myvalue)
    # mysum=myvalue+1000
    # st.write(mysum)
    # st.write(mysum[0])

 
#Second Part
if rad == "PORTFOLIO":

    create_table()
    st.title('PORTFOLIO')
    user_tata = st.text_input('Enter Stock Ticker','IEX.NS')
    user_quntity = st.number_input('Enter Stock Quantity')
    start=st.date_input("Stock Buy date")
    end=start
    
    #user_tata = st.text_input('Enter Stock Ticker','IEX.NS')
    pf=data.DataReader(user_tata,'yahoo',start,end)
    pf.reset_index(drop=True, inplace=True)
    pf =pf.drop(['High','Low','Open','Volume','Adj Close'], axis=1)
    #pf=pf.set_index('Close')
    stock_name=user_tata
    stock_quentity=user_quntity
    stock_price=pf.Close[0]
    #date 
    stock_date=start-relativedelta(years=5)
    end_date = start
    #st.write(stock_date)
    #st.write(end_date)

    #machine learnig 
    #most imp model
    df=data.DataReader(user_tata,'yahoo',stock_date,end_date)

    #prediction

    data_training = pd.DataFrame(df['Close'][0:int(len(df)*0.70)])
    data_testing = pd.DataFrame(df['Close'][int(len(df)*0.70):int(len(df))])

    from sklearn.preprocessing import MinMaxScaler
    scaler = MinMaxScaler(feature_range=(0,1))

    data_training_array = scaler.fit_transform(data_training)

    #load the model
    model=load_model('keras_model.h5')

    past_100_days = data_training.tail(100)
    final_df=past_100_days.append(data_testing,ignore_index=True)

    input_data=scaler.fit_transform(final_df)

    x_test =[]
    y_test = []

    for i in range(100,input_data.shape[0]):
        x_test.append(input_data[i-100:i])
        y_test.append(input_data[i,0])


    x_test,y_test = np.array(x_test),np.array(y_test)
    y_predicted = model.predict(x_test)

    scaler=scaler.scale_

    scaler_factor = 1/scaler[0]
    y_predicted=y_predicted*scaler_factor
    y_test =y_test * scaler_factor

    #plot the graph
    #st.subheader('Prediction vs Original')
    #fig2=plt.figure(figsize=(16,8))
    #plt.plot(y_test,'blue', label ='Original Price')
    #plt.plot(y_predicted,'red', label ='Predicted Price')
    #plt.xlabel('Time')
    #plt.ylabel('Price')
    #plt.legend()
    #st.pyplot(fig2)

    #this is only SEE values
    #st.write(y_predicted)
    mynum=len(y_predicted)
    myvalue=y_predicted[mynum-1]
    #st.write(mynum)
    #st.write(myvalue)
    # mysum=myvalue+1000
    # st.write(mysum)
    # st.write(mysum[0])
    


    #max_days=stock_date-end_date;
    #st.write(max_days);
    
    arrvalue=df['Close']
    #st.write(mynum)
    #st.write(arrvalue[-1])
    stock_pvalue=mynum+arrvalue[-1]
    #st.write(stock_name)
    #st.write(stock_price)
    #st.write(stock_date)
    #st.write(stock_pvalue)
    #st.write(pf)

    #this date for ever
    #st.write(pf)

    
 
    if st.button("Add Stock"):
        add_data(stock_name,stock_quentity,stock_price,stock_quentity*stock_price,start,stock_quentity*stock_pvalue)
        st.success("Added Stock:".format(user_tata))
    
    st.subheader("Top Stock Your Portfolio")
    run=view()
    #st.write(run)
    df=pd.DataFrame(run,columns=['Stock Name','Stock Quentity','Stock Price','Stock Investment','Buy Date','Pvalue'])
    st.dataframe(df)
    

    real=total_sum()
    realnew=total_sum_predict()
    #st.dataframe(real)
    #st.dataframe(realnew)
    array1 = np.array(realnew)
    array2 = np.array(real)
    subtracted_array = np.subtract(array1, array2)
    subtracted = list(subtracted_array)
    array3=np.array(subtracted)

    #total inverstment
    mynumm2=len(array2)
    myvalue2=array2[mynumm2-1]

    #total perdection value
    mynumm1=len(array1)
    myvalue1=array1[mynumm1-1]

    st.metric(label="Total Invesment", value=int(myvalue2))
    st.metric(label="Total Prediction Profit",value=int(myvalue1),delta=int(subtracted_array))
    # update_data(real,realnew,subtracted)
    # runn=viewprofit()
    # df=pd.DataFrame(runn,columns=['Total_inverment','Total_Pvalue','Total_Profit'])
    #st.dataframe(subtracted)

