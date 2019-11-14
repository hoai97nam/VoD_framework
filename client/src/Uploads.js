import React, { Component } from "react";
import SimpleStorageContract1 from "./contracts/SimpleStorage1.json";
import getWeb3 from "./utils/getWeb3";
import ipfs from './ipfs';

import "./App.css";

class Uploads extends Component {
  state = {
    ipfsHash: '',
    web3: null,
    buffer: null,
    account: null,
    contract: null,
    inputTitle: null
  }

  componentWillMount = async () => {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();

    // Use web3 to get the user's accounts.
    const account = await web3.eth.getAccounts();
    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = SimpleStorageContract1.networks[networkId];
    const instance = new web3.eth.Contract(
      SimpleStorageContract1.abi,
      deployedNetwork && deployedNetwork.address,
    );
    this.setState({ web3, account: account[0], contract: instance });
    console.log('test: ', this.state.contract)
  }

  captureFile(event) {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()
    const result = await ipfs.files.add(this.state.buffer)
    this.setState({ ipfsHash: result[0].hash });
    console.log('ifpsHash', this.state.ipfsHash)
    alert('upload successfully'); // notification

    // const { account, contract } = await this.state;

    await this.state.contract.methods.set(this.state.ipfsHash, this.state.inputTitle, this.state.account).send({ from: this.state.account })
    const respond = await this.state.contract.methods.get().call();
    console.log(respond);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <p className="ulv">This video is stored on IPFS & The Ethereum Blockchain!</p>
              <video className='video-frame' width="320" height="240" src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} type="video/mp4" autoPlay />
              <h2 className='ulv'>Upload Video</h2>
              <form onSubmit={this.onSubmit.bind(this)} >
                <input type='file' onChange={this.captureFile.bind(this)} />
                <br />
                <label className="label-title">TITLE </label>
                <input type='text' onChange={event => this.setState({ inputTitle: event.target.value })}
                  maxLength="50" placeholder="Your title" />  <br />
                <input type='submit' value='UPLOAD' />
                <p>{this.state.inputTitle}</p>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Uploads;
