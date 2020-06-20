import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search({ onClickSearch, onChange }) {
  return (
    <form>
      <Row className="my-5">
        <Col xs={12} className="search-Category">
          <div className="text-right">
            <Button
              id="button"
              className="btn-secondary"
              onClick={onClickSearch}
            >
              <span>search</span>
              <FontAwesomeIcon icon={faSearch} className="text-dark" />
            </Button>
          </div>
          <div className="text-center">
            <label>カクテル名・材料名・説明文</label>
            <input
              id="word"
              onChange={onChange}
              type="text"
              className="w-100"
            />
          </div>
          <div className="text-center">
            <label>ベース</label>
            <select id="base" onChange={onChange} className="w-100">
              <option value=""></option>
              <option value="1">ジン</option>
              <option value="2">ウォッカ</option>
              <option value="3">テキーラ</option>
              <option value="4">ラム</option>
              <option value="5">ウィスキー</option>
              <option value="6">ブランデー</option>
              <option value="7">リキュール</option>
              <option value="8">ワイン</option>
              <option value="9">ビール</option>
              <option value="10">日本酒</option>
              <option value="0">ノンアルコ―ル</option>
            </select>
          </div>
          <div className="text-center">
            <label>技法</label>
            <select id="technique" onChange={onChange} className="w-100">
              <option value=""></option>
              <option value="1">ビルド</option>
              <option value="2">ステア</option>
              <option value="3">シェイク</option>
            </select>
          </div>
          <div className="text-center">
            <label>味わい</label>
            <select id="taste" onChange={onChange} className="w-100">
              <option value=""></option>
              <option value="1">甘口</option>
              <option value="2">中甘口</option>
              <option value="3">中口</option>
              <option value="4">中辛口</option>
              <option value="5">辛口</option>
            </select>
          </div>
          <div className="text-center">
            <label>スタイル</label>
            <select id="style" onChange={onChange} className="w-100">
              <option value=""></option>
              <option value="1">ショート</option>
              <option value="2">ロング</option>
            </select>
          </div>
          <div className="text-center">
            <label>度数</label>
            <select id="alcohol" onChange={onChange} className="w-100">
              <option value=""></option>
              <option value="0,1">0%</option>
              <option value="1,10">1~10%</option>
              <option value="11,20">11~20%</option>
              <option value="21,30">21~30%</option>
              <option value="31,40">31~40%</option>
              <option value="41,100">41%~</option>
            </select>
          </div>
          <div className="text-center">
            <label>Top</label>
            <select id="top" onChange={onChange} className="w-100">
              <option value=""></option>
              <option value="1">食前</option>
              <option value="2">食後</option>
              <option value="3">オール</option>
            </select>
          </div>
          <div className="text-center">
            <label>グラス</label>
            <select id="glass" onChange={onChange} className="w-100">
              <option value=""></option>
              <option value="1">カクテルグラス</option>
              <option value="2">オールドファッションド</option>
              <option value="3">コリンズグラス</option>
              <option value="4">タンブラー</option>
              <option value="5">ワイングラス</option>
              <option value="6">シャンパングラス</option>
              <option value="7">ホットグラス</option>
              <option value="8">ゴブレット</option>
              <option value="9">リキュールグラス</option>
              <option value="10">サワーグラス</option>
              <option value="11">ピルスナーグラス</option>
            </select>
          </div>
        </Col>
      </Row>
    </form>
  )
}

export default Search
