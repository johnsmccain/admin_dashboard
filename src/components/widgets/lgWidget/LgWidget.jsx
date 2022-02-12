import React from "react";
import { user__data } from "../../../dummyData";
import Button from "../../button/Button";
import "./lgwidget.scss";
const LgWidget = () => {
  const users = user__data.reverse().slice(0, 5);
  return (
    <div className="lg-widget">
      <h3 className="lg-widget__title">latest transactions</h3>
      <table className="lg-widget__table">
        <tr className="lg-widget__table__row">
          <th className="lg-widget__table__row__header">customer</th>
          <th className="lg-widget__table__row__header">date</th>
          <th className="lg-widget__table__row__header">amount</th>
          <th className="lg-widget__table__row__header">status</th>
        </tr>

        {users.map((user) => (
          <tr className="lg-widget__table__row hovers">
            <td className="lg-widget__table__row__user">
              <img
                src={user.image}
                alt={user.name}
                className="lg-widget__table__row__user-img"
              />
              <span className="lg-widget__table__row__user-name">
                {user.name}
              </span>
            </td>
            <td className="lg-widget__table__row__date">{user.date}</td>
            <td className="lg-widget__table__row__amount">${user.amount}</td>
            <td className="lg-widget__table__row__btn">
              <Button type={user.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LgWidget;
