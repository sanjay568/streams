import React from 'react';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {
    
    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getStream(id);
    }

    deleteSreamById(id) {
        this.props.deleteStream(id);
    }

    render() {
        return <div>
            <table className='ui table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{this.props.stream.id}</td>
                            <td>{this.props.stream.title}</td>
                            <td>{this.props.stream.description}</td>
                            <td>
                                <button onClick={() => this.deleteSreamById(this.props.stream.id)} className='ui button primary'>Are you sure want to delete</button>

                            </td>
                        </tr>
                </tbody>
            </table>
        </div>;
    }
   
};

const mapStateToProps = (state) => {
    return {
        stream: state.stream,
        delstream: state.delStream
    }
}

export default connect(mapStateToProps, { getStream,deleteStream })(StreamDelete);