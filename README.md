[RESTFUL API 강좌](https://www.a-mean-blog.com/ko/blog/Node-JS-API/_/JWT-JSON-Web-Token-%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-REST-API-%EB%A7%8C%EB%93%A4%EA%B8%B0)

# Table of Contents

1. [오브젝트 목록](#오브젝트-목록)
2. [RESTFUL API Spec](#RESTFUL-API-Spec)

## 오브젝트 목록


## RESTFUL API Spec

### /api/auth/

#### /api/auth/login
Request:

	{
		user_login_id: "LOGIN_ID",
		user_login_pw: "LOGIN_PW"
	}

Response:
	
	{
		data: "LOGIN_TOKEN",
		errors: ERROR,
		message: null,
		success: true
	}

