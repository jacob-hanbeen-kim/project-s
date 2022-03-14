import {
    TabContainer,
    TabItems,
    Tab,
    TabPanel,
} from './Tabs.styled';

import React, { useState } from 'react';

const Tabs = ({ children, onClick, sticky, top }) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        console.log('current', activeTab);
        onClick && onClick(newActiveTab);
        setActiveTab(newActiveTab);
    };

    return (
        <>
            <TabContainer sticky={sticky} stickAt={top}>
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

Tabs.defaultProps = {
    sticky: true
}

export default Tabs
