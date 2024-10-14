import { Result } from 'antd';
import Link from 'next/link';
import React from 'react';

function ErrorPage() {
  return (
    <Result
      status='404'
      title='404 - Not Found!'
      subTitle='Xin lỗi, trang bạn đang tìm kiếm không tồn tại.'
      extra={(
        <Link className='btn-primary' href='/'>
          Back to home
        </Link>
      )}
    />
  );
}

export default ErrorPage;
