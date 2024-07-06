import React, { FC } from "react";
import styles from "./styles.module.css";
import { Col, Row } from "antd";
import { TotalCountCard } from "./TotalCountCard";

export const HomeTemplate = () => {
  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCard
            resource="topics"
            isLoading={false}
            totalCount={100}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCard
            resource="home_exercise"
            isLoading={false}
            totalCount={58}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCard
            resource="body_regions"
            isLoading={false}
            totalCount={32}
          />
        </Col>
        
      </Row>
    </div>
  );
};
