import {
    TabContainer,
    TabItems,
    Tab,
    TabPanel,
} from './Tabs.styled';

import React, { useState } from 'react';

const Tabs = ({ children }) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <>
            <TabContainer>
                <TabItems>
                    {
                        React.Children.map(children, function (child) {
                            const label = child.props.label;
                            if (label) {
                                return (
                                    <Tab href='#profile' onClick={(e) => handleClick(e, label)} isActive={label === activeTab}>
                                        {label}
                                    </Tab>
                                );
                            }
                        })
                    }
                </TabItems>
            </TabContainer>
            <TabPanel>
                {
                    React.Children.map(children, function (child) {
                        if (activeTab === child.props.label) return child;
                    })
                }
            </TabPanel>
        </>
    )
}

export default Tabs
