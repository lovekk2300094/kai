'''
变量dwc=token
动物城-7月1日首码
入口：http://saves.dwc.tuesjf.cn?type=1&share_code=PD7PN8
抓dwccc.tuesjf.cn接口的token 参数填在下面就行，token有的在url链接上，有的在请求体里，自己找
一天看25个广告得宠物蛋，宠物蛋拿去孵化，孵化完拿去派遣或合成或出售
里面的货币是金币，可直接兑换红包提现，出售宠物和派遣宠物都可获得
'''

import requests
import time
import random
start_time = int(time.time())
class dwc():
    def __init__(self,token) -> None:
        self.token = token
        self.headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "user-agent": "Mozilla/5.0 (Linux; Android 14; 23116PN5BC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36 uni-app Html5Plus/1.0(Immersed/42.0)",
            "Host": "dwccc.tuesjf.cn",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip"
        }
        self.state = 0

    def look_ad(self):
        url = "http://dwccc.tuesjf.cn/apis/v1/is_vip"
        params = {
            "token": self.token
        }
        #判断是否会员
        try:
            response = requests.get(url, headers=self.headers, params=params)
            print(f"判断会员：{response.json().get('msg')}")
        except Exception as e:
            print(f'判断会员异常{e}')
        time.sleep(random.randint(15,25))
        data = {
            "token": self.token
        }
        url2 = "http://dwccc.tuesjf.cn/apis/v1/lookVideo"
        try:
            response = requests.post(url2, headers=self.headers, data=data)
            msg = response.json().get('msg')
            print(f"领取蛋蛋：{msg}")
            if "次数上限" in msg:
                self.state = 1
        except Exception as e:
            print(f'领取蛋蛋异常{e}')

    def sign_num(self):
        url = "http://dwccc.tuesjf.cn/apis/v1/signNunShow"
        params = {
            "token": self.token
        }
        try:
            response = requests.get(url, headers=self.headers, params=params)
            self.in_num = response.json().get('data').get('info').get('in_num')
            
        except Exception as e:
            print(f'获取用户信息异常{e}')
    
    def main(self):
        print(f"=========开始任务：看广告=========")
        self.sign_num()
        if self.in_num < 25:
            while True:
                self.look_ad()
                if self.state == 1:
                    break
                time.sleep(random.randint(61,66))
        else:
            print('今天的广告看完了')

if __name__=='__main__':
    #填入token，多账号@隔开
    token = ''
    
    if token == '':
        print('你不填token怎么玩，真是够笨的')
        exit()
    tokens = token.split('@')
    print(f'总共有{len(tokens)}个账号')
    for i,token in enumerate(tokens):
        print(f"--------开始第{i+1}个账号--------")
        main=dwc(token)
        main.main()
        print(f"--------第{i+1}个账号执行完毕--------")
