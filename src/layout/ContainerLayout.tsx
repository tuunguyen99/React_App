import React from 'react';
import Fetch from './Fetch/Fetch';
import Table from './Fetch/Table';

const ContainerLayout = ()=>  {
  return (
    <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Simple Table
        <small>it all starts here</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
        <li className="active">Simple Table</li>
      </ol>
    </section>
    <section className="content">

      <div className="box">
        
        <Table/>
    
      </div>

    </section>
  </div>
  );
}

export default ContainerLayout;