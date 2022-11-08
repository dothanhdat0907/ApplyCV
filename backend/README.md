# Backend

## Cài đặt Python + Django:

### Khác nhau hệ điều hành
- Win10: ```pip``` và ```py``` <br />
- Win11: ```pip``` và ```python``` <br />
- MacOS:   ```pip3``` và ```python```?? <br />

### Tải python3
<a href="https://www.python.org/downloads/" target="_blank">Python3</a>

### Lỗi khi dùng pip
Set up môi trường cho pip khi gặp lỗi ``` pip command not found ``` <br />
<a href="https://stackoverflow.com/questions/23708898/pip-is-not-recognized-as-an-internal-or-external-command" target="_blank">Pip Environment</a>

### Cài đặt Django
```
pip install django
```

### Cài đặt thư viện
```
pip install djangorestframework
```
```
pip install django-cors-headers
```

### Migrate project
```
py manage.py makemigrations
```
```
py manage.py migrate
```

## Chạy server
Lưu ý: Migrate project trước khi chạy server
```
py manage.py runserver
```

## Đăng nhập admin
- Sau khi chạy server vào 
<a href="http://127.0.0.1:8000/admin " target="_blank">link</a> 
để đăng nhập vào admin hệ thống <br />
  - Tài khoản: **admin** <br />
  - Mật khẩu: **admin** <br />
- Admin hệ thống có thể view, add, update và delete các objects trong database
