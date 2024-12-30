import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Companies from "../Companies";
import { useEffect } from "react";

function Homecontent() {
  const { companiesopen } = useSelector((state) => state.counter);
  

  return (
    <>
      {companiesopen ? (
        <Companies />
      ) : (
        <>
          <div
            style={{
              backgroundImage:
                'url("/img/alex-jones-bBKVrH0vzB4-unsplash 1.jpg")',
              backgroundSize: "100% 50em",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "30em",
              position: "relative",
            }}
          >
            <div className="banner">
              <Typography className="banner-con" style={{ fontSize: "2.5em" }}>
                Welcome to the California Forest
              </Typography>
              <Typography className="banner-con" style={{ fontSize: "2.5em" }}>
                Industry Directory!
              </Typography>
              <Typography className="banner-con1" style={{ fontSize: "1.3em" }}>
                The directory facilitates the establishment of business
                connections between the broad array of interests in California's
                forestry sector.
              </Typography>
            </div>
          </div>

          <div
            className="d-flex align-items-center p-5 home-con"
            id="main-home"
          >
            <div className="main-con">
              <Typography>
                The Directory serves a number of purposes including:
              </Typography>
              <ul>
                <li>
                  Helping woodland owners find contact information for log
                  buyers, non-timber forest product buyers, and forestry
                  consultants & contractors
                </li>
                <li>
                  Assisting the primary manufacturing industry (sawmills,
                  plywood mills, log home builders, and chipping contractors) to
                  find sources of logs and buyers for their products
                </li>
                <li>
                  Helping secondary/value-added firms (moulding, millwork,
                  furniture and cabinet makers) find sources of lumber, panel
                  products, and other raw materials
                </li>
                <li>
                  Enabling entrepreneurs and architects to find the suppliers
                  and partners they need to commercialize a product/project
                </li>
                <li>
                  Providing the general public with information on local
                  producers of custom cabinets, rustic furniture, boughs for
                  wreaths, and much more.
                </li>
              </ul>
              <Typography>
                In the end, fostering better 'connections' will lead to a more
                vibrant California forestry sector.
              </Typography>
            </div>
            <div className="other-con">
              <Typography sx={{ margin: "1em" }}>
                add more info and a picture or icon about highlighted bullet
                point here.
              </Typography>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Homecontent;
