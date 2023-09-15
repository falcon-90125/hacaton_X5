from flask import Flask, jsonify, request, json, send_file
from flask_cors import CORS
import numpy as np
import pandas as pd
import os
from p03_prediction import prediction_list

# def prediction_list(id_address, shop_reviews):
#     shop_id = shop_reviews.id[0]
#     shop_address = id_address.address[id_address.index[id_address.id == shop_id][0]]
#     prediction = [] 
#     prediction.append([shop_id, shop_address])
#     for i in range(len(shop_reviews)):
#         prediction.append([shop_reviews.text[i], shop_reviews.rate[i]])
#     return prediction
 
module_path = os.path.abspath(__file__)
id_address_path = os.path.join(os.path.dirname(module_path), '..', 'hackathon_ITMO_X5/parsing_files/', 'shops_rates.xlsx')
shop_reviews_path = os.path.join(os.path.dirname(module_path), '..', 'hackathon_ITMO_X5/input/', 'shop_reviews.xlsx')

app = Flask(__name__)
CORS(app)
id_address = pd.read_excel(id_address_path, usecols=['id', 'address'])
shop_reviews = pd.read_excel(shop_reviews_path)

# < ====== пусть будет  ======>
# feedbacks = data[1:]
# feedbacks_list = [{"food": item[0], "mark": item[1]} for item in feedbacks]
# json_data =  {"id" : address[0], "address": address[1],
#               "feedbacks": feedbacks_list}
# n_json_data = {"feedbacks": feedbacks_list}
# < ====== пусть будет  ======>


@app.route('/get_data', methods=['GET'])
def get_json_data():
   try: 
      data = prediction_list(id_address, shop_reviews)
      address = data[0]
      feedbacks = data[1:]
      feedbacks_list = [{"text": item[0], "mark": int(item[1])} for item in feedbacks]
      json_data =  {"id" : int(address[0]), "address": address[1],
              "feedbacks": feedbacks_list}
    #   print(json_data)
      return  jsonify(json_data)

   except Exception as error :
      return jsonify({"error":error})       

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True, use_reloader=True)