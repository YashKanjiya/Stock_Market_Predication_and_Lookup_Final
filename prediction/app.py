import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pandas_datareader as data
from keras.models import load_model
import streamlit as st

start = '2018-08-01'
end = '2022-2-24'

st.title('Stock Treand Prediction')

user_input = st.text_input('Enter Stock Ticker','HDFCBANK.NS')
df=data.DataReader(user_input,'yahoo',start,end)

#data visible
st.subheader('Data from 2015 to 2022')
st.write(df.describe())

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

 
