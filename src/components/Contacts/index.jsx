import React from "react";
import Button from "../Generic/Button";
import Inputs from "../Generic/Input";
import "./style.scss"
import { Input } from 'antd';
const Contact = () => {
    const { TextArea } = Input;
    const onChange = (e) => {
      console.log('Change:', e.target.value);
    };
  return (
    <>
      <div className="contactWrapper">
        <div className="contactColumns">
            <div>
                <div>Leave us a message</div>
                <div><Inputs/></div>
                <div><Inputs/></div>
                <div><TextArea
      showCount
      style={{
        height: 154,
        resize: 'none',
        border: "2px solid #79787A" ,
        borderRadius: 15
      }}
      onChange={onChange}
      placeholder="disable resize"
    /></div>
            </div>
            <div>
                <div>informative</div>
                <div><Inputs/></div>
                <div><Inputs/></div>
                <div><Inputs/></div>
                <Button txt={"Btt"} />
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
