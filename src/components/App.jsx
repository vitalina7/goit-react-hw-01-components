import user from './Profile/user.json';
import data from './Statics/data.json';
import friends from './Friend/friends.json'
import transactions from './Transaction/transactions.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statics/Statistics'
import { FriendList } from './Friend/FriendList';
import { Transaction } from './Transaction/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <Transaction transactions={transactions}/>
      <GlobalStyle/>
   </Layout>
  );
};
