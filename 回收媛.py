#   --------------------------------注释区--------------------------------
#   https://www.52bjy.com/api/app/user.php找username
#   变量:hsyhs ，格式：username，多号@分割
#   corn: 每天跑一次就行 22 7 * * *
#   建议把请求头替换成自己的UA，填进ua里，不改也行挑选随机幸运儿封号
#   by fisher 2024.07.20

cookie =""
ua = ""

import requests
import json
import os
import hashlib
import time
from urllib.parse import urlencode
import random


cookie = ""#测试ck
class yyf():
    def __init__(self,cookie):
        
        self.key = "1079fb245839e765"
        self.scret = "UppwYkfBlk"
        self.username = cookie
        self.token = ""     
        self.headers = {
        'User-Agent': "Mozilla/5.0 (Linux; Android 14; 23116PN5BC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240404 MMWEBID/2445 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64",
        'xweb_xhr': "1",
        'envconnection': "test",
        'content-type': "application/json",
        'sec-fetch-site': "cross-site",
        'sec-fetch-mode': "cors",
        'sec-fetch-dest': "empty",
        'referer': "https://servicewechat.com/wxadd84841bd31a665/84/page-frame.html",
        'accept-language': "zh-CN,zh;q=0.9"
        }
        if ua:
            self.headers['User-Agent'] = ua

    def md5(self,dict):
        sorted_dict = sorted(dict.items())
        str = urlencode(sorted_dict, doseq=True)+self.scret
        #print(f"加密前{str}")
        md5 = hashlib.md5()
        md5.update(str.encode('utf-8'))
        return md5.hexdigest()
    

    
    def draw(self):

        url = "https://www.52bjy.com/api/app/promotionjgg.php"

        params = {
        'action': "addorder",
        'appkey': self.key,
        'mallid': "2580",
        'merchant_id': "2",
        'order_status': "3",
        'promotion_id': "258",
        'username': self.username,
        }
        sign = self.md5(params)
        params['sign'] = sign
        headers = self.headers

        response = requests.get(url, params=params, headers=headers).json()
        if response['is_success'] == True:
            print("🎉️抽奖成功")
        else:
            print("❌️抽奖失败",response['message'])
    def signin(self):

        url = "https://www.52bjy.com/api/app/hsy.php"

        params = {
        'action': "user",
        'app': "hsywx",
        'appkey': self.key,
        'merchant_id': "2",
        'method': "qiandao",
        'username': self.username,
        'version': "2",
        }
        sign = self.md5(params)
        params['sign'] = sign
        response = requests.get(url, params=params, headers=self.headers).json()
        if response['code'] == 200:
            print("🎉️签到成功")
        else:
            print("❌️签到失败",response['message'])
        time.sleep(2)
    def awardinfo(self):
        url = "https://www.52bjy.com/api/app/envcash.php"

        params = {
        'action': "awardlist",
        'appkey': self.key,
        'genre': "0",
        'merchant_id': "2",
        'page': "1",
        'type': "award",
        'username': self.username,
        }
        sign = self.md5(params)
        params['sign'] = sign
        headers = self.headers
        response = requests.get(url, params=params, headers=headers).json()
        if response['is_success'] == True:
            print(response['data']['record'])
        else:
            print("❌️查询失败",response['message'])



    def task(self):

        print("🎉️开始执行[签到]")
        self.signin()
        print("===========================")
        print("🎉️开始执行[抽奖]")
        self.draw()
        print("===========================")
        print("🎉️开始执行[查询信息]")
        self.awardinfo()


if __name__ == '__main__':
    
    if not cookie:
        cookie = os.getenv("hsyhs")
        if not cookie:
            print("请设置环境变量:hsyhs")
            exit()
    cookies = cookie.split("@")
    print(f"一共获取到{len(cookies)}个账号")
    i = 1
    for cookie in cookies:
     print(f"\n--------开始第{i}个账号--------")
     t = random.randint(1, 3)
     print(f"随机等待{t}秒")
     time.sleep(t)
     main = yyf(cookie)
     main.task()
     print(f"--------第{i}个账号执行完毕--------")
     i += 1
    