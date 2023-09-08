import os
import pandas as pd


module_path = os.path.abspath(__file__)
id_address_path = os.path.join(os.path.dirname(module_path), '..', 'hacaton_X5/parsing_files/', 'shops_rates.xlsx')
shop_reviews_path = os.path.join(os.path.dirname(module_path), '..', 'hacaton_X5/input/', 'shop_reviews.xlsx')
# print(module_path)
df = pd.read_excel(shop_reviews_path)
print(df.head(4))