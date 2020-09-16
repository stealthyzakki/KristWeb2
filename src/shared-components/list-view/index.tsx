import React, { Component, ReactNode } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ListPagination } from "./ListPagination";

import "./index.scss";
import { ListTable } from "./ListTable";

export enum SortDirection {
  ASC, DESC
}

export interface HeaderSpec {
  name: string;
  sortable?: boolean;
}

interface Props<T> {
  title?: string;
  actions?: ReactNode;
  filters?: ReactNode;

  page?: number;
  pages?: number;

  headers?: Map<Extract<keyof T, string>, HeaderSpec>;
}

export class ListView<T> extends Component<Props<T>> {
  render(): ReactNode {
    const { 
      title, actions, filters, 
      page, pages, 
      headers
    } = this.props;

    return <Container fluid className="py-4 list-view">
      {/* Main header row - wallet count and action buttons */}
      <Row className="mb-2">
        <Col className="d-flex align-items-center">
          {/* List title */}
          {title && <h3 className="flex-fill mb-0">{title}</h3>}

          {/* Optional action button row */}
          {actions && <div className="list-view-actions">{actions}</div>}
        </Col>
      </Row>

      {/* Search, filter and pagination row */}
      <Row className="mb-2">
        {/* List filters (e.g. search, category dropdown) */}
        {filters && 
          <Col className="list-view-filters">
            {filters}
          </Col>}

        {/* Pagination */}
        {page && pages && 
          <Col className="flex-grow-0">
            <ListPagination defaultPage={page} pages={pages} />
          </Col>}
      </Row>

      {/* Main table */}
      <ListTable headers={headers} />
    </Container>;
  }
}
