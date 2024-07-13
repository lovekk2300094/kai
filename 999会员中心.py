#50行替换自己的token后续更新
import requests
import time
import random

class ac:
    def __init__(self, token):
        self.headers = {
            'User-Agent': "Mozilla/5.0 (Linux; Android 14; 23116PN5BC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240404 MMWEBID/2445 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android",
            "authorization": token
        }
        self.list = ["zq", "mtbbs", "ydswfz", "zs"] 

    def sign(self):
        url = "https://mc.999.com.cn/zanmall_diy/ma/client/dailyHealthCheckIn/signTask"
        task_type = random.choice(self.list)
        data = {
            "type": task_type
        }
        response = requests.post(url, headers=self.headers, json=data)
        response_data = response.json()
        if response_data['code'] == '00000':
            name = response_data.get("data", {}).get("name", "")
            care_tips = response_data.get("data", {}).get("careTipsItem", "")
            print(f"{name} {care_tips}")
        else:
            print("已打卡")

    def finishTask(self):
        url = "https://mc.999.com.cn/zanmall_diy/ma/client/pointTaskClient/finishTask"
        all_successful = True
        for task_type in self.list:
            data = {
                "type": "daily_health_check_in",
                "params": {
                    "checkInCode": task_type,
                    "checkInTime": time.strftime("%Y-%m-%d")
                }
            }
            response = requests.post(url, headers=self.headers, json=data)
            response_data = response.json()
            if not response_data.get("success", False):
                all_successful = False
                print(f"任务 {task_type} 上报失败")
            time.sleep(random.uniform(3, 10))
        
        if all_successful:
            print("所有任务上报成功")

if __name__ == "__main__":
    token = "6ef01954-d59a-477d-8ab0-837c4fc4942a"
    ac_instance = ac(token)
    ac_instance.sign()
    ac_instance.finishTask()
