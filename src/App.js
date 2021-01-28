import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WebIcon from "@material-ui/icons/Web";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";

import EventNoteIcon from "@material-ui/icons/EventNote";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import CategoryIcon from "@material-ui/icons/Category";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

import ExposureIcon from "@material-ui/icons/Exposure";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdate";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import NoteIcon from "@material-ui/icons/Note";
import ImageIcon from "@material-ui/icons/Image";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import MenuIcon from "@material-ui/icons/Menu";
import DescriptionIcon from "@material-ui/icons/Description";
import BusinessIcon from "@material-ui/icons/Business";

const menus = [
  {
    name: "Preferred",
    icon: <LocalActivityIcon />,
    children: [
      {
        name: "Redemption",
        icon: <ReceiptIcon />,
        to:'/redemption'
      },
      {
        name: "Bookings",
        icon: <InsertInvitationIcon />,
        to:'/bookings'
      },
      {
        name: "Users",
        icon: <AccountBoxIcon />,
        to:'/users'
      },
      {
        name: "Dropleads",
        icon: <HowToVoteIcon />,
        to:'/droplead'
      },
      {
        name: "Event subscriptions",
        icon: <SubscriptionsIcon />,
        to:'/event_subscriptions'
      }
    ]
  },
  {
    name: "Content",
    icon: <WebIcon />,
    children: [
      { name: "Event", icon: <EventNoteIcon /> },
      { name: "Privilege", icon: <EmojiEventsIcon /> },
      { name: "Category", icon: <CategoryIcon /> }
    ]
  },
  {
    name: "User management",
    icon: <AccountBoxIcon />,
    children: [
      { name: "Import coupon", icon: <ConfirmationNumberIcon /> },
      { name: "Manage Point", icon: <ExposureIcon /> },
      { name: "Reward point", icon: <AddBoxIcon /> },
      { name: "Update member mobile", icon: <SystemUpdateIcon /> }
    ]
  },
  {
    name: "Report",
    icon: <AssessmentIcon />,
    children: [
      { name: "Export registered", icon: <PermContactCalendarIcon /> },
      { name: "Redemption", icon: <ReceiptIcon /> }
    ]
  },
  {
    name: "Microsite",
    icon: <WebIcon />,
    children: [
      { name: "Page", icon: <NoteIcon /> },
      { name: "Article", icon: <LibraryBooksIcon /> },
      { name: "Category", icon: <CategoryIcon /> },
      { name: "Image", icon: <ImageIcon /> },
      { name: "File", icon: <PictureAsPdfIcon /> },
      { name: "Menu control", icon: <MenuIcon /> },
      { name: "Term of use", icon: <DescriptionIcon /> },
      { name: "Privacy", icon: <DescriptionIcon /> }
    ]
  },
  {
    name: "Partner",
    icon: <PeopleIcon />,
    children: [
      { name: "Company", icon: <BusinessIcon /> },
      { name: "User", icon: <AccountBoxIcon /> }
    ]
  },
  {
    name: "Setting",
    icon: <SettingsIcon />,
    children: [
      { name: "DCS multiplier" },
      { name: "Popup message" },
      { name: "Control version" },
      { name: "Splash screen" },
      { name: "How to get point" },
      { name: "Rws code point" }
    ]
  },
  {
    name: "System",
    icon: <SettingsIcon />,
    children: [
      { name: "Job" },
      { name: "Activity log" },
      { name: "User log" },
      { name: "Role" },
      { name: "UCA map role" },
      { name: "System log" }
    ]
  }
];

export default function App() {
  return (
    <Router basename="/abc">
      <Layout menus={menus}>
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/users">
            user
          </Route>
          <Route path="/">
            home
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
