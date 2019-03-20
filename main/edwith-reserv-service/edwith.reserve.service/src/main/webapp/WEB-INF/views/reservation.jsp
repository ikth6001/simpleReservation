<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %> <!-- Templating 때문에 EL 표기법 사용 안 함 > 취소. EL을 사용 안하면 JSTL이 동작 안함;; -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title><spring:message code="title.site"/></title>
	
	<style type="text/css">
		#container {
			width: 600px;
			height: 100%;
			
			margin-left: auto;
			margin-right: auto;
		}
	</style>
	
</head>
<body>
	<div id="container">
		<div id="titleArea">title</div>
		<div id="mainArea">
			<div id="imgArea">img</div>
			<div id="txtArea">txt</div>
		</div>
		<div id="descArea">
			<div id="productDesc">설명</div>
			<div id="productTime">관람시간</div>
			<div id="productPrice">요금</div>
		</div>
		<div id="ticketSelArea">
			<!-- 성인, 유아 등등이 동적인지는 API 명세 확인 필요. -->
			<div id="ticketAdult">
				<div id="tAdultLeft">
					<div>성인<br>10200원</div>
					<div>10200원(할인15%)</div>
				</div>
				<div id="tAdultRight">
					<div>버튼</div>
					<div>10200 * n원</div>
				</div>
			</div>
		</div>
		<div id="reserverInfo">
			<div>예매자</div>
			<div>연락처</div>
			<div>이메일</div>
			<div>예매내용</div>
		</div>
		<div id="reservationRule">
			<div>개인정보 수집 동의</div>
			<div>개인정보 제 3자 제공 동의</div>
		</div>
		<div id="reservationFinal">
			예약하기
		</div>
	</div>
	
	<script type='text/javascript' src='js/handlebars-v4.1.0.js'></script>
	<script type="text/javascript" src="js/reservation.js"></script>
</body>
</html>