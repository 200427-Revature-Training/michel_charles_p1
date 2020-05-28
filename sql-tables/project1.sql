CREATE TABLE ers_reimbursement_status(
			
			reimb_status_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
			reimb_status VARCHAR(10)

);


CREATE TABLE ers_reimbursement_type(

			reimb_type_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
			reimb_type VARCHAR(10)


);


CREATE TABLE ers_user_roles(

			ers_user_role_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
			user_role VARCHAR(10)



);


CREATE TABLE ers_reimbursement(

			reimb_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
			reimb_amount MONEY,
			reimb_submitted TIMESTAMP,
			reimb_resolved TIMESTAMP,
			reimb_description VARCHAR(250),
			reimb_receipt VARCHAR (250), 
			reimb_author INTEGER,
			reimb_author 










)