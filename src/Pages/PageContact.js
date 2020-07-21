import React from 'react';
import intl from 'react-intl-universal';
import {
    Descriptions,
} from 'antd';

const Tel = "+86 18930719839";
const Address = "shiyi.chen@mines-paristech.fr";
const LinkedInAddress = "http://www.linkedin.com/in/shiyi-chen-090ab7167";
const GitHubLink = "https://github.com/Shiyi-1925";

class PageContact extends React.Component {
    render() {
        return (
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'left' }}>
                <Descriptions title={intl.get('CONTACT_HEAD')} bordered>
                    <Descriptions.Item label={intl.get('TEL')} span={2}>{Tel}</Descriptions.Item>
                    <Descriptions.Item label="E-mail" span={2}>
                        <a href="mailto:" Address>{Address}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="LinkedIn" span={4}>
                        <span><a href={LinkedInAddress} target="_blank" rel="noopener noreferrer">{LinkedInAddress}</a></span>
                    </Descriptions.Item>
                    <Descriptions.Item label="GitHub" span={4}>
                        <span><a href={GitHubLink} target="_blank" rel="noopener noreferrer">{GitHubLink}</a></span>
                    </Descriptions.Item>

                </Descriptions>
            </div>
        )
    }
}

export default PageContact