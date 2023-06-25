import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export function StartProjectForm({ openModal, handleOpenModal, setOpenModal }) {
  return (
    <Dialog open={openModal} handler={handleOpenModal}>
      <DialogHeader>
        <h1 className="mx-auto">Start a Project</h1>
      </DialogHeader>
      <DialogBody>
        <form className="mx-auto">
          <div className="my-5">
            <Input label="Company Name" />
          </div>
          <div className="my-5">
            <Input label="Email" />
          </div>
          <div className="my-5">
            <Input label="Sector" />
          </div>
          <div className="my-5">
            <Input label="Type of Project" />
          </div>
          <div className="my-5">
            <Input label="Target Amount" />
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={setOpenModal}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={setOpenModal}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default StartProjectForm;
