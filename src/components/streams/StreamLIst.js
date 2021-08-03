import React from 'react';
import {fetchList} from '../../actions';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchList();
    }
    
   
    render() {
        let count =0;
        const { userId , isSignedIn } = this.props.auths;
        console.log(this.props.auths);
        const pos = this.props.posts.map((post,index)=> {
                console.log(post);
                return (<tr><td>{post.title}</td>
                <td>{post.description}</td>
                <td>
                   { userId === post.userId  ?  <div><Link to={`/streams/delete/${post.id}`}>Delete</Link>  | <Link to={`/streams/delete/${post.id}`}>Edit</Link> </div> : null }
                </td>
                </tr>);
              
         });
        return (<div className='ui container'>
           <table className='ui table'>
             <thead>
               <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit</th> 
                </tr>   
              </thead> 
              <tbody>
                  {pos}
              </tbody>  
            </table>   
            { isSignedIn === true ? <Link to='/streams/new'><button  className='ui button primary'>Create Stream</button></Link> : null }
        </div>);
    }
    
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auths: state.auths
    }
}

export default connect(mapStateToProps,{ fetchList })(StreamList);