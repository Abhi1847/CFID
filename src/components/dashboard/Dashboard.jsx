import React from "react";
import SocialShare from "../SocialShare";
import { closeSuccessModel } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Companies from "../Companies";

function Dashboard() {
  const { isSuccess } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Companies />

      <Dialog
        fullWidth={true}
        maxWidth={true}
        id="popupDialog"
        open={isSuccess}
        scroll={"body"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent className="popup">
          <div className="flex-row exit-button">
            <IconButton
              className={"float-end p-0"}
              color="inherit"
              onClick={() => dispatch(closeSuccessModel())}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex-row">
            <div className="popup-img"></div>
            <div className="popup-content">
              <div className="popup-content">
                <h4>Success!</h4>
                <small>
                  You're officially part of the Resilient Sierra program and
                  community
                </small>
                <div>
                  <h6 className="mt-3 mb-2">Share the benefits with others</h6>
                  <SocialShare />
                  <br />
                  <small>
                    Lets your neighbors know that your properties are safer when
                    resilient together
                  </small>
                </div>

                <div className="mt-5">
                  <small>See what comes next with your analysis</small>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Dashboard;
