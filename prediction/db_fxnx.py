import sqlite3
conn = sqlite3.connect('data.db',check_same_thread=False)
c = conn.cursor()

def create_table():
	#c.execute('CREATE TABLE IF NOT EXISTS stockprice(stock_name TEXT,stock_price TEXT,date DATE)')
	c.execute('CREATE TABLE IF NOT EXISTS stockprofit(stock_name TEXT primary key,stock_quentity NUMERIC,stock_price NUMERIC,inverst_total NUMERIC,date DATE,pvalue NUMERIC)')
	c.execute('CREATE TABLE IF NOT EXISTS stocktotal(stock_total NUMERIC,stock_pre_total NUMERIC,stock_profit NUMERIC)')

def add_data(stock_name,stock_quentity,stock_price,inverst_total,date,pvalue):
	#c.execute('INSERT INTO stockprice(stock_name,stock_price,date) VALUES (?,?,?)',(stock_name,stock_price,date))
	c.execute('INSERT INTO stockprofit(stock_name,stock_quentity,stock_price,inverst_total,date,pvalue) VALUES(?,?,?,?,?,?)',(stock_name,stock_quentity,stock_price,inverst_total,date,pvalue))
	conn.commit()

def view():
	c.execute('select * from stockprofit')
	return c.fetchall()

#DELETE FROM stockprofit WHERE stock_name='INFY';

def total_sum():
	c.execute('SELECT SUM(inverst_total) FROM stockprofit')
	return c.fetchall()

def total_sum_predict():
	c.execute('SELECT SUM(pvalue) FROM stockprofit')
	return c.fetchall()
