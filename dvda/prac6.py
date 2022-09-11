import numpy as p
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from math import exp
plt.rcParams["figure.figsize"]=(10,6)
data = pd.read_csv("Social_Network_Ads.csv")
data.head()
plt.scatter(data['Age'],data['Purchased'])
plt.show()
x_train,x_test,y_train,y_test=train_test_split(data['Age'],data['Purchased'],test_size=0.20)
from sklearn.linear_model import LogisticRegression
lr_model=LogisticRegression()
lr_model.fit(x_train.values.reshape(-1,1),y_train.values.reshape(-1,1))
y_pred=lr_model.predict(x_test.values.reshape(-1,1))
plt.clf()
plt.scatter(x_test,y_pred,c="red")
plt.show()
Accuracy=lr_model.score(x_test.values.reshape(-1,1),y_test.values.reshape(-1,1))
print(Accuracy)
