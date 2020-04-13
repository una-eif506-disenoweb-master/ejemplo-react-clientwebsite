import React from 'react';
import styles from './Article.module.css'
import {Row, Col} from 'react-bootstrap'

const Article = (props) => {
    return (
        <Row className={styles.Article}>
            <Col>
                <h1>Bienvenido al sitio para cliente XYZ</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada urna vel diam cursus, at rutrum nibh consequat. Vivamus semper commodo erat sit amet vulputate. Aliquam erat volutpat. In ullamcorper at eros eget dapibus. Donec egestas tristique mi. Integer ante sapien, auctor vel luctus eget, sollicitudin quis elit. Proin velit nulla, interdum eu diam et, tempus sollicitudin quam. Nunc feugiat ut lectus vel volutpat.
                </p>
                <p>
                    Aenean id arcu congue, fermentum elit ut, vestibulum elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam at tellus ex. Morbi cursus neque quis interdum porttitor. Nam nisl arcu, elementum id varius at, molestie ut ex. Pellentesque et nibh at ante cursus egestas sit amet id justo. Sed nec luctus ante. Phasellus porta lorem sit amet sem scelerisque, eget ultrices odio aliquam. Morbi porta vel dolor iaculis volutpat. Praesent egestas congue augue. Duis libero tellus, lobortis sed dui a, tincidunt maximus lacus. Morbi quis fringilla risus, quis pellentesque nisl. Maecenas finibus urna erat, et faucibus nunc gravida nec.
                </p>
                <p>
                    Sed eu varius arcu. Suspendisse sit amet venenatis ex. Aenean at viverra arcu. Duis in mauris tincidunt, luctus lorem vitae, convallis purus. Curabitur maximus nisi a sapien aliquam ornare. Aliquam faucibus tellus vel neque malesuada maximus. Pellentesque pulvinar sollicitudin sem in placerat. Nunc fringilla nulla non tortor accumsan convallis. Aenean volutpat nec arcu eget maximus. Praesent vel mollis odio. Maecenas elementum eros vitae sem euismod ultrices. Donec ex dui, suscipit id maximus blandit, finibus non eros. Fusce at metus a purus placerat condimentum ac eget felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam convallis semper libero, vel vehicula erat iaculis sed.
                </p>
            </Col>
        </Row>
    )
};

export default Article;