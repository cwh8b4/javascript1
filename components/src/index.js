import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            {CommentDetail}
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="YES! IT WORKS!!!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 2:00AM" content="YESSSSSSSSSSS" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard><CommentDetail authors="Jane" timeAgo="Yesterday at 5:00PM" content="HAHAHAHAHA" avatar={faker.image.avatar()}/>
</ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

