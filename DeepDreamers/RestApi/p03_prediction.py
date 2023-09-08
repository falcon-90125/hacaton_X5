import pandas as pd

def prediction_list(id_address, shop_reviews):

    # # # Загружаеем файлы tokenizer'а и обучающую базу
    # with open('input/tokenizer.pickle', 'rb') as handle:
    #     tokenizer = pickle.load(handle)

    # model = load_model('input/model.h5') # Размер будет порядка 50Mb, возможно побольше...

    shop_id = shop_reviews.id[0] #Берём id магазина
    shop_address = id_address.address[id_address.index[id_address.id == shop_id][0]] #Берём адрес по id

    prediction = [] #Собираем отчёт для демонстрации
    prediction.append([shop_id, shop_address])
    for i in range(len(shop_reviews)):
        prediction.append([shop_reviews.text[i], shop_reviews.rate[i]])

    return prediction