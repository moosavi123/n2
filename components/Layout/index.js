import { Divider } from "antd";
import Link from 'next/link';
import React from 'react';
import { Nav, Container, Navbar, Button } from 'react-bootstrap';
import styles from "./layout.module.css"
import {useRouter} from "next/router"

const Layout = ({ children }) => {
    const router = useRouter()

    console.log(router.pathname);

    return (
        <div>
            <Navbar className={styles.navbar} bg="dark" variant="dark" fixed='top' >
                <Container>
                    <Navbar.Brand href="/"><img width={33} src={"/favicon.ico"}/> تاپ فیلم</Navbar.Brand>
                    <Divider style={{backgroundColor:"white !important"}} type="vertical"/>
                    <Nav className="me-auto">
                        <Link href={"/"}><Nav.Link active={router.pathname === "/"} href="/">خانه</Nav.Link></Link>
                        <Link href="/ggg"><Nav.Link active={router.pathname.split("/")[1] == "ggg"} href="/ggg">فیلم ها</Nav.Link></Link>
                        <Link href="/pricing" >pricing</Link>
                    </Nav>
                </Container>
                <Button className={styles.auth_btn} variant="light" onClick={()=> alert(router.pathname)} >ورود</Button>
            </Navbar>
            <div>{children}</div>
        </div>
    );
}

export default Layout;
