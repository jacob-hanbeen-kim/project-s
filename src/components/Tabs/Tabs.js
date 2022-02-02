import {
    TabContainer,
    TabList,
    TabItem,
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
                <TabList>
                    {
                        React.Children.map(children, function (child) {
                            const label = child.props.label;
                            return (
                                <TabItem key={label}>
                                    <a href='#' onClick={(e) => handleClick(e, label)}>
                                        {label}
                                    </a>
                                </TabItem>
                            );
                        })
                    }
                </TabList>
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
