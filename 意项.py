'''
微信打开注册：https://w.xiyiwangluo.com/index/wechat/mpLogin?share=104021
抓w.xiyiwangluo.com接口的请求头里的token
注册后跑一两个暂停进软件看看有没有加钱，加了再继续跑
我不确定都能加，自己试了只有第一个注册的大号加了，提了6块秒到，注册的小号怎么跑也不加钱
脚本运行后会生成一个文件，不要删掉，用来防重复的
'''

import requests
import time
import os
token=os.getenv("yx_token")
if not token:
    print("请检查环境变量是否存在")
    exit()
headers = {
    "token": token,
    "user-agent": "Mozilla/5.0 (Linux; Android 14; 23116PN5BC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/42.0)",
    "Host": "w.xiyiwangluo.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip"
}
def add(id):

    url1 = f"https://w.xiyiwangluo.com/api/article/articleInfo?id={id}&terminal=1"
    
    response = requests.get(url1, headers=headers)
    #print(response.json())
    print(f"查看文章成功{response.json().get('msg')}")
    time.sleep(30)
    
    url2 = f"https://w.xiyiwangluo.com/api/article/authorContactInfo?id={id}&terminal=1"
    response = requests.get(url2, headers=headers)
    print(f"查看名片成功{response.json().get('msg')}")
    time.sleep(5)
    
    url3 = "https://w.xiyiwangluo.com/api/article/contactAction"
    data = {
        "id": id,
        "type": 2,
        "platform": "plus"
    }
    response = requests.post(url3, headers=headers, json=data)
    print(f"复制名片：{response.json().get('msg')}")
    time.sleep(20)
    
    url4 = "https://w.xiyiwangluo.com/api/article/articleHistoryOut"
    data = {
        "id": id,
        "platform": "plus"
    }
    response = requests.post(url4, headers=headers, json=data)
    print(f"添加完成{response.json().get('msg')}")
    with open(r'./yx_id.txt','a') as f:
        f.write(f'\n{id}')


page = 1
try:
    with open(r'./yx_id.txt','r') as f:
        ids = f.read()
except:
    with open(r'./yx_id.txt','w') as f:
        f.write()
    with open(r'./yx_id.txt','r') as f:
        ids = f.read()
while True:
    print(f'获取第{page}页')
    url = "https://w.xiyiwangluo.com/api/content/homeArticleLists"
    data = {
        "page": page,
        "page_size": 10,
        "type": "all",
        "keyword": "",
        "platform": "plus"
    }
    response = requests.post(url, headers=headers, json=data)
    for i in response.json().get('data').get('list'):
        id = i.get('id')
        if str(id) not in ids:
            add(id)
            time.sleep(5)
    page += 1