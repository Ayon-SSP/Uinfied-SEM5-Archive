import pandas
dfa = pandas.read_csv("boi.csv")
print(dfa.head())
dfb = dfa.dropna()
print(dfb.head())
