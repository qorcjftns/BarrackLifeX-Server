[RESTFUL API 강좌](https://www.a-mean-blog.com/ko/blog/Node-JS-API/_/JWT-JSON-Web-Token-%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-REST-API-%EB%A7%8C%EB%93%A4%EA%B8%B0)

# Table of Contents

1. [오브젝트 목록](#오브젝트-목록)
	1. [User](#user)
	1. [Rank](#rank)
1. [RESTFUL API Spec](#restful-api-spec)
	1. [/api/auth](#/api/auth)
		1. [/api/auth/login](#/api/auth/login)

## 오브젝트 목록
MongoDB 내부에 저장되는 스키마 목록입니다.

### User
Model Location: `/model/User.js`

사용자 모델입니다. 사용자의 모든 정보를 담고 있습니다.

| Column | Type | Default | Required | Description |
| ---- |
| user_login_id | String | - | true | 로그인 아이디 |
| user_login_pw | String | - | true | 로그인 비밀번호 |
| user_name | String | - | true | 사용자 이름 |
| user_rank | Number | 1 | true | 사용자 계급 |
| user_email | String | - | String | 사용자 이메일 |
| user_address | String | - | true | 사용자 주소 |
| user_phone_no | String | - | true | 사용자 전화번호 |
| user_is_admin | Boolean | - | true | 사용자 관리자 여부 |

### Rank
Model Location: `/model/Rank.js`

계급 모델입니다. 계급 정보를 저장합니다.

| Column | Type | Default | Required | Description |
| ---- |
| rank_id | Number | - | true | 계급 고유 번호 |
| rank_name | String | - | true | 계급 명칭 (이병,일병 등등) |
| rank_type | String | - | true | 계급 종류 (병,부사관,장교) |


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

