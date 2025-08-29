"use client";

import React from "react";
import {Dropdown, Button} from "react-bootstrap";
import "moment/locale/pt-br";
import Title from "@/components/ui/title";
import GetSchedules from "@/components/get-schedules";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Title level={4} className={"mb-0 pb-0"}>Agendamentos</Title>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary">
            Exportar
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#" className={"d-flex justify-content-between gap-3"}>
              <span>CSV</span>
              <i className="bi bi-filetype-csv text-primary"></i>
            </Dropdown.Item>
            <Dropdown.Item href="#" className={"d-flex justify-content-between gap-3"}>
              <span>PDF</span>
              <i className="bi bi-file-earmark-pdf-fill text-primary"></i>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      
      <GetSchedules/>
    </>
  )
};

export default Dashboard;