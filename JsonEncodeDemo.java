package testPackage;

import org.json.JSONObject;
import org.json.JSONArray;

import java.sql.*;
import java.util.ArrayList;

//import com.mysql.jdbc.Driver;

import java.util.Collection;
import java.io.FileWriter;
//import java.io.IOException;

public class JsonEncodeDemo {

	public static void main(String[] args) {
		
		
			Connection con=null;
			Statement st=null;
			
			try{
				JSONObject obj = new JSONObject();
				//ArrayList<String> arr=new ArrayList<String>();
				Collection<JSONObject> items = new ArrayList<JSONObject>();
				
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			 con = DriverManager.getConnection("jdbc:mysql://localhost:3306/person","swetha","swetha");
			 st= con.createStatement();
			ResultSet rs=st.executeQuery("select * from info");
			while(rs.next())
			{
				JSONObject objNew = new JSONObject();
				objNew.put("ID" , rs.getInt(1));
				System.out.println("welcome "+rs.getInt(1));
				objNew.put("FName" , rs.getString(2));
				System.out.println("welcome "+rs.getString(2));
				objNew.put("LName" , rs.getString(3));
				System.out.println("welcome "+rs.getString(3));
				items.add(objNew);
				obj.put("pplInfo", new JSONArray(items));
			      System.out.println("-----"+obj.toString());
	
			}
			     
		      FileWriter file = new FileWriter("C:\\Users\\Swetha\\Angular\\jsonFile.json");
				file.write(obj.toString());
				file.flush();
				file.close();
		    		      
			rs.close();
			st.close();
			con.close();
		
		}catch(Exception e)
		{
			System.out.println(e.toString());
		}
		}

	}


