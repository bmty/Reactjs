import React from "react";
import "./App.css";

export default function Prolife() {
  return (
    <div className="cv">
      <div className="header">
        <img
          src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
          alt="avatar"
        />
        <h1>Bùi Minh Ty</h1>
        <ul className="information1">
          <li>
            <i className="fas fa-birthday-cake">27/04/2004</i>
          </li>
          <li>
            <i className="fas fa-venus-mars">Nam</i>
          </li>
          <li>
            <i className="fas fa-phone">0943809337</i>
          </li>
        </ul>
        <ul className="information1_2">
          <li>
            <i className="fas fa-envelope"></i>buiminhty2004@gmail.com
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>59/21 Y Moan,TP.Buôn Ma
            Thuộc
          </li>
        </ul>
        <hr />
      </div>
      <div className="experience">
        <h2>Kinh nghiệm làm việc</h2>
        <p className="p2"> 13/02/2019 - 13/02/2023
        </p>
        <h3 className="inf4">AT HOME</h3>
        <p className="p1">Chủ nhà tương lai</p>
        <ul className="ul1">
          <li>Công việc tương đối nhàn rỗi chỉ có học,chơi,ngủ,ăn,phụ gia đình,vệ sinh</li>
          <li>Kinh nghiệm khá nhiều sau nhiều năm làm việc tại nhà</li>
          <li>THỉnh thoảng đi giao hàng cho hoa sữa :))</li>
        </ul>
      </div>
      <hr />
      <div className="education">
    <h2 className="h2">Học vấn</h2>
    <p className="p3">13/02/2019 - 13/02/2023</p>
    <h3 className="inf5">Trường cao đẳng FPT Polytechnic</h3>
    <p className="p4">Bằng cử nhân ngành ABC</p>
    <ul className="ul2">
        <li>Đạt danh hiệu sinh viên xuất sắc</li>
        <li>Tham gia các câu lạc bộ và hoạt động xã hội</li>
        <li>Tham gia các khóa học và dự án ngoại khóa</li>
    </ul>
</div>

    </div>
  );
}
