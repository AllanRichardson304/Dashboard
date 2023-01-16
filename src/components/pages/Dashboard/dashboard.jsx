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
import videoimg from '../../../assets/img/video thumbnail.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);
export const data = {
  labels: ['France', 'Italy', 'Japan', 'Canada'],
  datasets: [
    {
      label: '# of Votes',
      legend: {
        position: 'bottom'
      },
      data: [12, 12, 12, 12],
      backgroundColor: [
        '#80e2ff',
        '#f49fa8',
        '#ffdf94',
        '#b5b3fb',
      ],

    },
  ],

};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};
export const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const labels = ['Jab', 'Feb', 'Mar', 'Apr', 'May', 'Jun',];

export const dataLine = {
  labels,
  datasets: [
    {
      label: 'Products sold',
      data: [100, 10, 50, 700, 0, 100],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Total views',
      data: [200, 50, 100, 900, 80, 1500],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__title-content">
        <h2>Overview</h2>
        <button>Add Funds <img src={plus} alt="" /></button>
      </div>
      <Row className='dashboard__flex-row'>
        <Col xs={24} sm={24} md={24} lg={24} xl={16} >
          <Row className='dashboard__flex-row'>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} className="pr-2">
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
                <div id="line-chart">
                  <Line options={optionsLine} data={dataLine} />
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} className="pr-2" >
              <div className='dashboard__card'>
                <div className='dashboard__card-title'>
                  <h6>Sales Distribution</h6>

                </div>
                <div id='doughut-chart'>
                  <Doughnut data={data} options={options} />
                </div>
              </div>
            </Col>
          </Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className='mt-2 pr-2'>
            <div className='dashboard__card'>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Views</th>
                      <th>Sales</th>
                      <th>Conversion</th>
                      <th>Total</th>

                    </tr></thead>
                  <tbody>
                    <tr>
                      <td>google.com</td>
                      <td>3746</td>
                      <td>752</td>
                      <td>43%</td>
                      <td>$19,291</td>
                    </tr>
                    <tr>
                      <td>google.com</td>
                      <td>3746</td>
                      <td>752</td>
                      <td>43%</td>
                      <td>$19,291</td>
                    </tr>
                    <tr>
                      <td>google.com</td>
                      <td>3746</td>
                      <td>752</td>
                      <td>43%</td>
                      <td>$19,291</td>
                    </tr>
                    <tr>
                      <td>google.com</td>
                      <td>3746</td>
                      <td>752</td>
                      <td>43%</td>
                      <td>$19,291</td>
                    </tr>
                    <tr>
                      <td>google.com</td>
                      <td>3746</td>
                      <td>752</td>
                      <td>43%</td>
                      <td>$19,291</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </Col>

        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8} >
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className='dashboard__flex-row-block'>

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
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className='mt-2'>
              <div className='dashboard__card'>
                <div className='dashboard__userslist'>
                  <h5>Product Video</h5>
                  <img src={more} alt="" />
                </div>
                <div className='dashboard__video-img'>
                  <img src={videoimg} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

  )
}
