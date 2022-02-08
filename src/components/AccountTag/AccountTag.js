import { useState } from 'react';
import {
    AccountContainer,
    AccountWrapper,
    AccountButton,
    AccountNumber,
    CryptoIcon
} from './AccountTag.styled'

const AccountTag = ({ account }) => {

    const [isCopying, setCopying] = useState(false);

    const onCopy = () => {
        setCopying(true);
        navigator.clipboard.writeText(account);
        setTimeout(function () {
            setCopying(false);
        }, 2500);
    };

    const getConcatAccount = () => {
        if (account) {
            if (account.length < 10) {
                return account;
            } else {
                return account.substring(0, 5) + '...' + account.substring(account.length - 4)
            }

        } else {
            return 'none'
        }
    }


    return (
        <AccountContainer>
            <AccountWrapper>
                <AccountButton onClick={onCopy}>
                    <CryptoIcon src={process.env.PUBLIC_URL + "/images/account/ethereum.svg"} loading="lazy" />
                    <AccountNumber>
                        {
                            isCopying ? 'Copied!' : getConcatAccount()
                        }
                    </AccountNumber>
                </AccountButton>
            </AccountWrapper>
        </AccountContainer>
    )
}

export default AccountTag
