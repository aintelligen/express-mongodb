# Express Server Demo


# install 
install mongoDB: - [mongoDB](http://www.runoob.com/mongodb/mongodb-tutorial.html) 
<!-- # mongoDB config
```txt
数据库路径  
dbpath=E:/Software/MongoDB/data
数据库路径  
logpath=E:/Software/MongoDB/log/mongod.log
端口  
port=27017
``` -->

# 注册到服务
```bash
E:\Software\MongoDB\bin\mongod.exe --config "E:\Software\MongoDB\bin\mongod.cfg" --serviceName MongoDB Server
```


#  dev  
```bash
npm install
npm run server  (pm2 start ./server/server.js --watch)

```  

    
# prod  
```bash
npm install
npm i -g pm2
pm2 start ./server/server.js 
```

