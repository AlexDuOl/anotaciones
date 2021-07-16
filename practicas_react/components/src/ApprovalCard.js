import React from 'react';

const ApprovalCard = (props) => {
    return (
     <div className="ui card">
         <div className="content">{props.children}</div>
         <div className="extra content">
             <div className="ui tow buttons">
                 <div className="ui basic green button">Aprovado</div>
                 <div className="ui basic red button">Rechazado</div>
             </div>
         </div>
     </div>
    );
};

export default ApprovalCard;