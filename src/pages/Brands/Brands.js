import {
    BrandsContainer,
    BrandsWrapper,
    BrandCard
} from './Brands.styled';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserService from '../../services/users-service';
import { Button } from '../../styles/Button.styled';

const Brand = () => {

    const navigate = useNavigate();
    const [brands, setBrands] = useState([]);

    const navigateToBrand = (name, usertype) => {
        navigate(`/account/${name}`, { state: { usertype: usertype } });
    }

    useEffect(() => {
        UserService.getUsers().then((users) => {
            console.log(users);

            let brands = [];
            users.map((user) => {
                if (user.usertype === 'sponsor') {
                    const brand = (
                        <BrandCard key={user.id}>
                            {user.name}
                            {user.id}
                            <Button onClick={() => navigateToBrand(user.name, user.usertype)}>
                                Visit
                            </Button>
                        </BrandCard>
                    )

                    brands.push(brand);
                }
            })

            setBrands(brands);
        })
    }, [])

    return (
        <BrandsContainer>
            <BrandsWrapper>
                {brands}
            </BrandsWrapper>
        </BrandsContainer>
    )
}

export default Brand
