import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';

// export default class EventDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible : false
//         }
//     }

//     openModal() {
//         this.setState({
//             visible : true
//         });
//     }

//     closeModal() {
//         this.setState({
//             visible : false
//         });
//     }

//     render() {
//         return (
//             <section>
//                 <h1>React-Modal Examples</h1>
//                 <input type="button" value="Open" onClick={() => this.openModal()} />
//                 <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
//                     <div>
//                         <h1>Title</h1>
//                         <p>Some Contents</p>
//                         <button onClick={() => this.closeModal()}>Close</button>
//                     </div>
//                 </Modal>
//             </section>
//         );
//     }
// }

function EventDetails(props) {

  return (
    <Modal visible={props.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => props.closeDetails()}>
      <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <button onClick={() => this.closeModal()}>Close</button>
      </div>
    </Modal>
  )
}

export default EventDetails