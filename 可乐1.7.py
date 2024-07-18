#   --------------------------------注释区--------------------------------
#   入口:入口:https://kg0420140003-1317678061.cos.ap-nanjing.myqcloud.com/index.html?upuid=2335248
#   走个头谢谢 不然没更新动力了呜呜呜

#   变量:yuanshen_klyd
#   多号分割方式 [ @ 或 换行 或 新建同名变量 ]
#   抓取udtauth12的值填入
#   corn: 一小时一次即可

#   检测配置：
#   在yuanshen_apptoken，yuanshen_topicid分别填入你的wxpusher的apptoken和topicid
#   注意是填的topicid而不是你的uid 不要傻乎乎把uid填上去 填了不推送文章包黑号的
#   不懂看 https://wxpusher.zjiecode.com/docs/#/ 或 百度 或 打钱

withdrawal_money = 3000 #提现金币数量 1000金币=0.1r
Quantity_limit = 190  #阅读上限篇数
#   --------------------------------一般不动区--------------------------------
#                     _ooOoo_
#                    o8888888o
#                    88" . "88
#                    (| -_- |)
#                     O\ = /O
#                 ____/`---'\____
#               .   ' \\| |// `.
#                / \\||| : |||// \
#              / _||||| -:- |||||- \
#                | | \\\ - /// | |
#              | \_| ''\---/'' | |
#               \ .-\__ `-` ___/-. /
#            ___`. .' /--.--\ `. . __
#         ."" '< `.___\_<|>_/___.' >'"".
#        | | : `- \`.;`\ _ /`;.`/ - ` : | |
#          \ \ `-. \_ __\ /__ _/ .-` / /
#  ======`-.____`-.___\_____/___.-`____.-'======
#                     `=---='
# 
#  .............................................
#           佛祖保佑             永无BUG
#           佛祖镇楼             BUG辟邪
#佛曰:  
#        写字楼里写字间，写字间里程序员；  
#        程序人员写程序，又拿程序换酒钱。  
#        酒醒只在网上坐，酒醉还来网下眠；  
#        酒醉酒醒日复日，网上网下年复年。  
#        但愿老死电脑间，不愿鞠躬老板前；  
#        奔驰宝马贵者趣，公交自行程序员。  
#        别人笑我忒疯癫，我笑自己命太贱；  
#        不见满街漂亮妹，哪个归得程序员？
#
#   --------------------------------代码区--------------------------------
import requests
import time
import os
from urllib.parse import urlparse,parse_qs,quote
import re
import random
import math
code="可乐阅读"
ver="1.7"
envname="yuanshen_klyd"
split_chars=['@','&','\n']
debug=False
debugcookie=""
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   print(f"--------第{i}个账号执行完毕--------")
 if not os.getenv(envname)and not debug:
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie=debugcookie
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 if debug:
  scmain(cookies)
 else:
  try:
   scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
class yuanshen:
 def __init__(self,cookie)->None:
  self.fuck_list=[1,2,126]
  self.biz_list=['MzkwNTY1MzYxOQ==','MzA3NzMzNjMwMQ==']
  self.cookies={"udtauth12":cookie}
 def tuisong(self):
  url=f"https://wxpusher.zjiecode.com/api/send/message/?appToken={appToken}&topicId={topicIds}&content=检测文章%0A请在20秒内完成验证!%0A%3Cbody+onload%3D%22window.location.href%3D%27{quote(self.readurl)}%27%22%3E"
  r=requests.get(url).json()
  print(f"🎉️检测文章推送结果{r}")
 def getmain(self):
  headers={"Host":"230640607122241.asfuoqa.cn","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240501 MMWEBID/5295 MicroMessenger/8.0.50.2701(0x28003251) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  url='http://230640607122241.asfuoqa.cn/r?upuid=2306406'
  r=requests.get(url,headers=headers,allow_redirects=False)
  if r.status_code==302:
   j=urlparse(r.headers['Location'])
   self.mainurl=j.netloc
   print(f"获取主域名成功:[{self.mainurl}]")
   self.headers={"Host":self.mainurl,"Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240501 MMWEBID/5295 MicroMessenger/8.0.50.2701(0x28003251) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","X-Requested-With":"XMLHttpRequest","Referer":f"http://{self.mainurl}/new?upuid=2306406","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  else:
   print('获取主域名失败')
   exit()
 def getdomain(self):
  url=f'http://{self.mainurl}/tuijian?url='
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   self.today_num=int(r["data"]["infoView"]["num"])
   try:
    print(r["data"]["infoView"]["msg"])
    return False
   except:
    pass
  url=f'http://{self.mainurl}/new/bbbbb'
  r=requests.get(url,headers=self.headers,cookies=self.cookies)
  self.domain=r.json()['jump']
  j=urlparse(self.domain)
  p=parse_qs(self.domain.split('?')[1])
  self.iu=p.get('iu',[None])[0]
  self.domain_url=j.netloc
  print(f"获取域名成功:[{self.domain_url}][{self.iu}]")
  time.sleep(2)
  h={"Host":self.domain_url,"Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  r=requests.get(self.domain,headers=h,allow_redirects=False)
  match=re.search(r"var dr_url = '(.*)'",r.text)
  if match:
   self.canshu=match.group(1)
   print("Get 阅读参数----Ok!")
  else:
   print("发生未知错误 获取参数失败")
   exit()
  print("="*30)
  return True
 def read(self):
  self.readh2={"Host":self.domain_url,"Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240301 MMWEBID/5295 MicroMessenger/8.0.48.2580(0x28003035) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","X-Requested-With":"com.tencent.mm","Referer":f"http:/{self.domain_url}/dodoaa/ttdd/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  print(f"今日已读:[{self.today_num}]篇文章")
  jkey=None
  time.sleep(random.randint(2,5))
  while True:
   self.today_num+=1
   r=random.random()
   if jkey is None:
    url=f"http://{self.domain_url}{self.canshu}?iu={self.iu}&pageshow&t={r}"
   else:
    url=f"http://{self.domain_url}{self.canshu}?iu={self.iu}&pageshow&t={r}&jkey={jkey}"
   r=requests.get(url,headers=self.readh2).json()
   try:
    jkey=r["jkey"]
    self.readurl=r['url']
   except:
    print(f"获取文章链接失败[{r}]")
    break
   print(f"第[{self.today_num}]次获取文章成功:[{r['url']}]")
   k=urlparse(self.readurl)
   biz=parse_qs(k.query).get('__biz',[''])[0]if '__biz' in parse_qs(k.query)else ''
   if biz in self.biz_list or self.today_num in self.fuck_list:
    print('遇到检测文章，推送ing....')
    self.tuisong()
    time.sleep(random.randint(20,26))
   else:
    time.sleep(random.randint(8,18))
   if self.today_num>=Quantity_limit:
    print(f"今日已读数量已达设置上限")
    break
 def userinfo(self):
  url=f'http://{self.mainurl}/tuijian?url='
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   gold=float(r['data']['user']['score'])*100
   print(f'今日已赚金币:[{float(r["data"]["infoView"]["score"])*100}]\n当前账号剩余金币:[{gold}] = [{gold/10000}]元')
   if gold>=withdrawal_money:
    self.withdrawal()
   else:
    print(f"金币余额不足[{withdrawal_money}] 不提现")
  else:
   print(f"查询个人余额失败:[{r}]")
 def withdrawal(self):
  url=f'http://{self.mainurl}/withdrawal'
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   score=math.floor(float(r['data']['user']['score']))
   data={'amount':score,'type':'wx'}
   url=f'http://{self.mainurl}/withdrawal/doWithdraw'
   r=requests.post(url,data=data,headers=self.headers,cookies=self.cookies)
   print(f"提现结果:[{r.text}]")
 def main(self):
  self.getmain()
  time.sleep(random.randint(2,5))
  if self.getdomain():
   self.read()
  self.userinfo()
if __name__=='__main__':
 appToken=''
 topicIds=''
 if debug:
  appToken=''
  topicIds=''
 if not appToken or not topicIds:
  appToken=os.getenv('yuanshen_apptoken')
  topicIds=os.getenv('yuanshen_topicid')
  if not appToken or not topicIds:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_topicid和yuanshen_apptoken")
   exit()
 env()
