import plus from '../../../assets/img/plus.svg'
import { Col, Row } from 'antd';
import { Select } from 'antd';
import profileimg from '../../../assets/img/profile-pic-01.jpg'
import profiletwo from '../../../assets/img/profile-pic-02.jpg'
import profilethree from '../../../assets/img/profile-pic-03.jpg'
import profilefour from '../../../assets/img/profile-pic-04.jpg'
import twitter from '../../../assets/img/twitter.png'
import whatsapp from '../../../assets/img/whatsapp.png'
import linkedin from '../../../assets/img/linkedin.png'
import facebook from '../../../assets/img/facebook.png'
import more from '../../../assets/img/more-vertical.svg'
export const Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="dashboard__title-content">
                <h2>Overview</h2>
                <button>Add Funds <img src={plus} alt="" /></button>
        </div>
      <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <div className='dashboard__card'>
          <div className='dashboard__card-title'>
            <h6>Statistics</h6>
            <Select
    optionFilterProp="children"
    defaultValue="Last 6 months"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[  
      {
        value: 'Last 6 months',
        label: 'Last 6 months',
      },
      {
        value: 'Last 3 months',
        label: 'Last 3 months',
      },
      {
        value: 'Last 1 month',
        label: 'Last 1 month',
      },
    ]}
  />
          </div>
          <div></div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <div className='dashboard__card'>
          <div className='dashboard__card-title'>
            <h6>Sales Distribution</h6>
           
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={8}>
        <div className='dashboard__card'>
          <div className='dashboard__profile-content'>
            <div className='dashboard__profile-img'>
            <img src={profileimg} alt="" />
            <h4>Nick Herasimenka</h4>
            <p>United States</p>
            <div className="dashboard__socialmedia">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={whatsapp} alt="" />
            </div>
            </div>
            
          </div>
           <div className='dashboard__userslist'>
              <h5>Our Users</h5>
              <img src={more} alt="" />
           </div>
           <div className='dashboard__userslist'>
                 <div className='d-flex'>
                   <div className='dashboard__userprofile'>
                     <img src={profilethree} alt="" />
                   </div>
                   <div className='dashboard__username'>
                    <h4>Drew James</h4>
                    <h6>United States</h6>
                   </div>
                 </div>
                 <div className='dashboard__phtxt'>
                  <h3>Mobile : 8715674877</h3>
                 </div>
           </div>
           <div className='dashboard__userslist'>
                 <div className='d-flex'>
                   <div className='dashboard__userprofile'>
                     <img src={profiletwo} alt="" />
                   </div>
                   <div className='dashboard__username'>
                    <h4>Bavid Kames</h4>
                    <h6>United States</h6>
                   </div>
                 </div>
                 <div className='dashboard__phtxt'>
                  <h3>Mobile : 8715674877</h3>
                 </div>
           </div>
           <div className='dashboard__userslist'>
                 <div className='d-flex'>
                   <div className='dashboard__userprofile'>
                     <img src={profilefour} alt="" />
                   </div>
                   <div className='dashboard__username'>
                    <h4>Lavid Emes</h4>
                    <h6>United States</h6>
                   </div>
                 </div>
                 <div className='dashboard__phtxt'>
                  <h3>Mobile : 8715674877</h3>
                 </div>
           </div>
          </div>
     
      </Col>
      </Row>
      </div>
    )
  }
  