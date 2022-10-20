/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react'
import Input from '@/components/Input'
import Layout from '@/components/Layout'
import { useViewport } from '@/hooks/useViewport'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@/components/Button'
import { FiPlus } from 'react-icons/fi'
import {
  RiSearch2Line,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMoreLine,
} from 'react-icons/ri'
import Card from '@/components/Card'
import { useStore, type IState } from '@/utils/store'
import dayjs from 'dayjs'
import Image from 'next/image'
import _ from 'lodash'
import { useRouter } from 'next/router'

const Driver: NextPage = () => {
  const { isMobile } = useViewport()
  const router = useRouter()
  const store: IState = useStore()
  const data = useMemo(
    () => store?.usersChunk?.[(store?.currentPage || 1) - 1],
    [store?.usersChunk, store?.currentPage],
  )

  useEffect(() => {
    store.getUsers?.()
  }, [])
  useEffect(() => {
    store.goToPage?.((router?.query?.page as string) || '1')
  }, [router?.query?.page])

  return (
    <>
      <Head>
        <title>Driver</title>
      </Head>
      <Layout>
        <div className="container">
          <div className="page-header">
            <div>
              <h1>DRIVER MANAGEMENT</h1>
              <p>Data driver yang bekerja dengan Anda.</p>
            </div>
            <div className="page-header-item--flex">
              <Input
                block={isMobile}
                onChange={_.debounce(
                  (e: React.ChangeEvent<HTMLInputElement>) =>
                    store.handleSearch?.(e.target.value),
                  150,
                )}
                icon={
                  <RiSearch2Line
                    size={18}
                    style={{ color: 'var(--primary)' }}
                  />
                }
                placeholder="Cari Driver"
              />
              <Button size="lg" block={isMobile}>
                TAMBAH DRIVER
                <FiPlus size={16} />
              </Button>
            </div>
          </div>
        </div>
        {store?.loading && <div className="container center">Loading...</div>}
        {!store?.loading && data ? (
          <div className="vh-scroll container">
            {data?.map((user, idx) => (
              <Card
                key={user?.id?.value || idx}
                className="driver-card"
                header={
                  <>
                    <div>
                      Driver ID{' '}
                      <span className="driver-id">
                        {user?.id?.value?.replace(' ', '') || '-'}
                      </span>
                    </div>
                    <Button variant="icon" size="sm">
                      <RiMoreLine size={24} />
                    </Button>
                  </>
                }
              >
                <div className="item">
                  <div className="avatar">
                    <Image
                      src={user?.picture?.large as string}
                      width={isMobile ? 160 : 100}
                      height={isMobile ? 160 : 100}
                      alt={user?.name?.first}
                    />
                  </div>
                </div>
                <div className="item">
                  <div>
                    <label>Nama Driver</label>
                    <p>{`${user?.name?.first} ${user?.name?.last}`}</p>
                  </div>
                  <div>
                    <label>Telepon</label>
                    <p>{user?.phone || '-'}</p>
                  </div>
                  <div>
                    <label className="item-hide-mscreen">Email</label>
                    <p className="item-hide-mscreen">{user?.email}</p>
                  </div>
                  <div>
                    <label className="item-hide-mscreen">Tanggal Lahir</label>
                    <p className="item-hide-mscreen">
                      {user?.dob?.date
                        ? dayjs(user?.dob?.date).format('DD-MM-YYYY')
                        : '-'}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="container center">No Data</div>
        )}
        {data && (
          <div className="container pagination">
            <Button
              variant="transparent"
              disabled={store?.currentPage === 1}
              onClick={() => router.push(`/?page=${store?.currentPage - 1}`)}
            >
              <RiArrowLeftSLine size={24} />
              Previous Page
            </Button>
            <Button
              variant="transparent"
              disabled={store?.currentPage === store?.usersChunk?.length}
              onClick={() => router.push(`/?page=${store?.currentPage + 1}`)}
            >
              Next Page
              <RiArrowRightSLine size={24} />
            </Button>
          </div>
        )}
      </Layout>
    </>
  )
}

export default Driver
