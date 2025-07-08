#include <bits/stdc++.h>
using namespace std;

#define F first
#define S second
#define frr(i,x,n) for(int i = x; i > n; i--)
#define pb push_back
#define SQ(a) a*a
using vi = vector<int>;
void yes() { cout << "YES\n"; }
void no() { cout << "NO\n"; }
int const N = 1e7 + 10;
const int MOD = 1e9 + 7;
#define int long long
#define MP make_pair

#define vi vector<int>
#define si set<int>
#define pi pair<int, int>
#define mi map<int, int>
#define umi unordered_map<int, int>
#define ps(x) cout<<x<<" ";
#define pe(x) cout<<x<<endl;
#define var(x) int x; cin >> x;
#define sarr(ar,x) sort(ar,ar+x,greater<int>());
#define sar(ar,x) sort(ar,ar+x);
#define svx(v) sort(v.begin(),v.end(),cmp);
#define sv(v) sort(v.begin(),v.end());
#define svr(v) sort(v.rbegin(),v.rend());
#define xinv(x,v) (v.find(x)!=v.end())
#define fr(i,a,b) for(int i=a;i<b;i++)
#define all(v) v.begin(),v.end()
#define mxe(v) *max_element(v.begin(),v.end())
#define mne(v) *min_element(v.begin(),v.end())
mt19937 rd(chrono::steady_clock::now().time_since_epoch().count());

void solve() {
     var(n);
     vi a(n);
     fr(i,0,n){
        cin>>a[i];
     }
     fr(i,1,n){
        if(a[i]%a[i-1]){
            ans=lcm(ans,a[i-1]/(gcd(a[i],a[i-1])));
        }
     }
}

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    var(t);
    while(t--){
    solve();}
    return 0;
}
