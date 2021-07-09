package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class UserDAO {
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
	
	public UserDAO() {
		try {
			String dbURL = "jdbc:oracle:thin:@10.10.0.131:1521:M2";
			String dbID = "cli";
			String dbPassword = "cli1993";

			Class.forName("oracle.jdbc.driver.OracleDriver");

			conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
//	CREATE TABLE  USER5 (
//			  userName VARCHAR(20),
//			  userAge INT,
//			  userGender VARCHAR(20),
//			  userEmail VARCHAR(20)
//			);
//
//			INSERT INTO USER5 VALUES ('홍길동', 21, '남자', 'gildong@gmail.com');
//			INSERT INTO USER5 VALUES ('김철수', 22, '남자', 'chulsu@gmail.com');
//			INSERT INTO USER5 VALUES ('김영희', 23, '여자', 'younghee@gmail.com');
//			INSERT INTO USER5 VALUES ('이순신', 24, '남자', 'soonshin@gmail.com');
//			INSERT INTO USER5 VALUES ('둘리', 25, '남자', 'dooli@gmail.com');
//			INSERT INTO USER5 VALUES ('Mark', 26, '남자', 'mark@gmail.com');
//			INSERT INTO USER5 VALUES ('Julia', 27, '여자', 'julia@gmail.com');
//			INSERT INTO USER5 VALUES ('나이뻐', 28, '여자', 'beauty@gmail.com');
//			INSERT INTO USER5 VALUES ('이토 히로부미', 29, '남자', 'bastard@gmail.com');
//			INSERT INTO USER5 VALUES ('안중근', 30, '남자', 'hero@gmail.com');

	public ArrayList<User> search(String userName) {
		String SQL = "SELECT * FROM USER5 WHERE userName LIKE ?";
		ArrayList<User> userList = new ArrayList<User>();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, "%" + userName + "%");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				User user = new User();
				user.setUserName(rs.getString(1));
				user.setUserAge(rs.getInt(2));
				user.setUserGender(rs.getString(3));
				user.setUserEmail(rs.getString(4));
				userList.add(user);
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		return userList;
	}
	
	public int register(User user) {
		String SQL = "INSERT INTO  USER5 VALUES (?, ?, ?, ?)";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, user.getUserName());
			pstmt.setInt(2, user.getUserAge());
			pstmt.setString(3, user.getUserGender());
			pstmt.setString(4, user.getUserEmail());
			return pstmt.executeUpdate(); // return 1 (�뻾�쓽 �닔)
		} catch(Exception e) {
			e.printStackTrace();
		}
		return -1; // �뜲�씠�꽣踰좎씠�뒪 �삤瑜�
	}
}
