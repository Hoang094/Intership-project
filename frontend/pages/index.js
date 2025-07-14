import { Empty, Result, Skeleton } from 'antd';
import axios from 'axios';
import getConfig from 'next/config';
import Link from 'next/link';
import React from 'react';
import Banner from '../components/home/Banner';
import FeaturedRooms from '../components/home/FeaturedRooms';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import MainLayout from '../components/layout';

const { publicRuntimeConfig } = getConfig();

function Home(props) {
  return (
    <MainLayout title='Hotel Booking ― Home'>
      <Hero>
        <Banner title='luxurious rooms' subtitle='deluxe rooms giá chỉ từ 1.000.000 đ'>
          <Link href='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Skeleton loading={!props?.featuredRooms && !props?.error} paragraph={{ rows: 5 }} active>
        {props?.featuredRooms?.data?.rows?.length === 0 ? <Empty className='mt-10' description={<span>Không có dữ liệu</span>} /> : props?.error ? <Result title='Failed to fetch' subTitle={props?.error?.message || 'error'} status='error' /> : <FeaturedRooms featuredRoom={props?.featuredRooms?.data?.rows} />}
      </Skeleton>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(`${publicRuntimeConfig.API_BASE_URL}/api/v1/featured-rooms-list`);

    // Check what the API actually returns
    const featuredRooms = response?.data?.result || null;

    return {
      props: {
        featuredRooms,
        error: null,
      },
    };
  } catch (err) {
    return {
      props: {
        featuredRooms: null,
        error: err?.response?.data || { message: err.message },
      },
    };
  }
}
export default Home;
