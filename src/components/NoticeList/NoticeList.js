import React from 'react';
export default class NoticeList extends React.Component {
    render() {
        return (
            <div className="sub-container container-fluid project">
			    <section className="content-header">
			        <h1>
			            项目管理
			        </h1>
			        <ol className="breadcrumb">
			            <li><a href=""><i className="fa fa-dashboard"></i> 项目管理</a></li>
			            <li className="active">项目列表</li>
			        </ol>
			        <div className="row clearfix">
			            <div className="col-md-3 ">
			                <div className="input-group">
			                    <input type="text" className="form-control" />
			                    <span className="input-group-addon">搜索</span>
			                </div>
			            </div>
			            <div className="col-md-6">
			                <div className="btn-group">
			                    <label className="btn btn-default">全部</label>
			                    <label className="btn btn-default">已结束</label>
			                    <label className="btn btn-default">进行中</label>
			                </div>
			            </div>
			            <div className="col-md-2  pull-right clearfix">
			                <button className="btn btn-primary pull-right">新建项目</button>
			            </div>
			        </div>
			    </section>
			    <section className="content">
			        <div className="row">
			            <div className="col-xs-12">
			                <div className="box">
			                    <div className="box-body ">
			                        <table className="table table-hover">
			                            <thead>
			                            <tr>
			                                <th>添加时间</th>
			                                <th>项目名称</th>
			                                <th>状态</th>
			                                <th>算法</th>
			                                <th>团队</th>
			                                <th>用户</th>
			                                <th>任务/完成</th>
			                                <th>进度</th>
			                                <th>GH数/GH正确率</th>
			                                <th>用户回答/待查/准确率</th>
			                                <th>算法结果</th>
			                                <th>总工资</th>
			                                <th>用户工资</th>
			                                <th>管理分成</th>
			                                <th>单条成本</th>
			                                <th>小时数量</th>
			                                <th>成本单价</th>
			                                <th>功能</th>
			                            </tr>
			                            </thead>
			                            <tbody>
			                          
			                            </tbody>
			                        </table>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>
        );
    }
}
